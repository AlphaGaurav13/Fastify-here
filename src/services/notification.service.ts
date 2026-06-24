import  { ServerResponse } from 'http'

const clients: ServerResponse[] = [];


export function addClient(client: ServerResponse) {
    clients.push(client);
}


export function removeClient(client: ServerResponse) {
    const index = clients.indexOf(client);


    if(index != -1) {
        clients.splice(index, 1);
    }
}

export function broadcast(message: string) {
    clients.forEach((client) => {
        client.write(
            `data: ${JSON.stringify({
                message,
            })}\n\n`
        );
    }); 
}