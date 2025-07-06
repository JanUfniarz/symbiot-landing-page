export type AuditData = {
    email: string;
    description: string;
}

export const handleSubmit = (data: AuditData) => manageRequest(
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
): Promise<void> => {
    try {
        const response = await callback()

        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}