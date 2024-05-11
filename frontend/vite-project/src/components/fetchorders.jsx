export async function fetchorders() {
    try {
        const response = await fetch('http://127.0.0.1:8000/order/');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
}

//function to fetch specific order by id
export async function fetchOrderById(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/order/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching order by ID:', error);
        return null;
    }
}


