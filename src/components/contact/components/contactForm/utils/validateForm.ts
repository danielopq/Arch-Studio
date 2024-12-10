export const isEmpty = (text: string): boolean => {
    return (text.trim() === '');
}

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


export default { isEmpty, isValidEmail}