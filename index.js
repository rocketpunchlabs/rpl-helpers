/**
 * Shorten text to to a number of words followed by ...
 * 
 * @export
 * @param {string} text - Text to be shortened.
 * @param {number} words - Number of words to shorten text to.
 * @return {string} - Shortened text followed by ...
 */
export function shortenText(text, words) {
  return `${text
    .split(' ')
    .slice(0, words)
    .join(' ')}...`;
}

/**
 * Validate email address.
 * 
 * @export
 * @param {string} email -Email to be validated.
 * @return {boolean} - True if valid email or false if invalid.
 */
export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Validate phone number.
 * 
 * @export
 * @param {string} phone - Phone number to validate.
 * @return {boolean} - True if valid phone number or false if invalid.
 */
export function validatePhone(phone) {
  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
    phone
  );
  console.log(a);
  return a;
}
