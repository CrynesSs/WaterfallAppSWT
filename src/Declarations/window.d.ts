interface Window {
    myAPI: {
        changeTitle(name: string): Promise<void>,
        sendLoginForm(formData: FormData): Promise<FormData>
    };
}