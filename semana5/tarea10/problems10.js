function palindrome(text) {
    text = text.toLowerCase().replaceAll(/\s+/g, '')
    arrayText = text.split("")
    reverseArrayText = arrayText.reverse()
    reverseText = reverseArrayText.join("")

    if (reverseText === text) return `Is a palindrome`;
    return `Is not a palindrome`
}

console.log(palindrome("Sé verlas al revés"));