from rest_framework.decorators import api_view
from rest_framework.response import Response
import hmac
import hashlib
import base64
import json
import uuid
from django.shortcuts import redirect
from products_api.models import Order

#Esewa's Secret key for testing
secret_key = "8gBm/:&EnhH.1/q"


#fucntion to create the order as well as form data for esewa integration
@api_view(['POST'])
def paymentAPI(request):
    data = request.data
    total = data.get('total')
    email = data.get('email')
    name = data.get('name')
    phone = data.get('phone')
    items = data.get('items')
    place=data.get('address')
    
    order = Order.objects.create(
        customer=name,
        email=email,
        phone=phone,
        products=items,
        payment='Esewa',
        address=place,
        amount=total
    )
    uuid_val = order.id
    message = f"total_amount={total},transaction_uuid={uuid_val},product_code=EPAYTEST"
    signature = generate_signature(message, secret_key)
    #data to be sent to the frontend for esewa integration
    form = {
        "amount": total,
        "failure_url": "https://google.com",
        "product_delivery_charge": "0",
        "product_service_charge": "0",
        "product_code": "EPAYTEST",
        "signature": signature,
        "signed_field_names": "total_amount,transaction_uuid,product_code",
        "success_url": "http://127.0.0.1:8000/payment/success/",
        "tax_amount": "0",
        "total_amount": total,
        "transaction_uuid":uuid_val
    }
    return Response(form)

#function to manage the order based on the successfull esewa payment
@api_view(['GET'])
def paymentSuccess(request):
    # Payment success callback logic
    data = request.GET.get('data')
    decoded_data = base64.b64decode(data).decode('utf-8')

    try:
        map_data = json.loads(decoded_data)
        transaction_uuid = map_data.get('transaction_uuid')
        total_amount = map_data.get('total_amount')
        status = map_data.get('status')
        signature = map_data.get('signature')
        order = Order.objects.get(id=transaction_uuid)
        if status == 'COMPLETE':
            # message = f"total_amount={total_amount},transaction_uuid={transaction_uuid},product_code=EPAYTEST"
            # expected_signature = generate_signature(message, secret_key)
          
            # if signature == expected_signature:
               
            order.status = 'Paid'
            order.save()
            return redirect('http://localhost:5173/success')
            # else:
            #     order.delete()
                # return redirect('http://localhost:5173/error?message=InvalidSignature')
        else:
            # Payment status not complete, handle appropriately
            order.delete()
            return redirect('http://localhost:5173/error?message=PaymentStatusNotComplete')
    except Exception as e:
        # Error occurred during processing, handle appropriately
        return redirect('http://localhost:5173/error?message=ProcessingError')

#function to generate signature required for esewa integration
def generate_signature(message, secret_key):

    # Convert the secret key and input string to bytes
    secret_key_bytes = secret_key.encode('utf-8')
    input_string_bytes = message.encode('utf-8')

    # Generate the HMAC-SHA256 hash
    hmac_sha256 = hmac.new(secret_key_bytes, input_string_bytes, hashlib.sha256)

    # Get the digest of the hash
    digest = hmac_sha256.digest()

    # Encode the digest in base64
    signature = base64.b64encode(digest).decode('utf-8')

    return signature
