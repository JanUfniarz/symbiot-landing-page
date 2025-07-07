export const handleSubmit = (data: {
    email: string;
    description: string;
}) => manageRequest(
    async () => await fetch('/api/audit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
)

const manageRequest = async (
    callback: () => Promise<Response>
): Promise<boolean> => {
    try {
        const response = await callback()

        if (response.ok) {
            console.log('Data sent successfully');
            return true
        } else {
            console.error('Failed to send data');
            return false
        }
    } catch (error) {
        console.error('Error sending data:', error);
        return false
    }
}