interface Window {
    myAPI: {
        changeTitle(name: string): Promise<void>,
        sendLoginForm(formData: String[]): Promise<FormData>
    };
}