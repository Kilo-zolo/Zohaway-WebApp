
export type UserLoginType = {
    email: string;
    password: string
}

export async function UserLogin(obj: UserLoginType): Promise<any> {
    const currentUser: UserLoginType = {
        email: obj.email,
        password: obj.password
    };

    try {
        const response = await fetch('https://zohaway-functions.azurewebsites.net/api/UserLogin', {
          method: 'POST',
          body: JSON.stringify(currentUser),
        });
        const responseData = await response.text(); // Get the response data as text
        
        return responseData; // Return the response data
    } catch (error) {
        console.error(error);
        return "500";
    }
}

