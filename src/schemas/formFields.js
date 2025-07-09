export const loginFields = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "john.doe@example.com",
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "••••••••",
    }
]

export const registerFields = [
    {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "John Doe",
    },
    ...loginFields,
]
