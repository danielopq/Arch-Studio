/**
 * Checks if a string is empty or consists only of whitespace.
 * 
 * @param {string} text - The string to validate.
 * @returns {boolean} - Returns `true` if the string is empty or only contains whitespace; otherwise, `false`.
 */
export const isEmpty = (text: string): boolean => {
    return (text.trim() === '');
}

/**
 * Validates if a given string follows a valid email format.
 * 
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns `true` if the email format is valid; otherwise, `false`.
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


export default { isEmpty, isValidEmail}