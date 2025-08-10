/**
 * @project     Ferramenta de Segurança para Senhas
 * @author      FoxMoonDev (https://github.com/FoxMoonDev)
 * @license     MIT License
 * @copyright   Copyright (c) 2024, FoxMoonDev
 *
 * Este código está protegido pela Licença MIT.
 * Consulte o arquivo LICENSE no repositório para mais detalhes.
 */
document.addEventListener('DOMContentLoaded', () => {

    function showCopyNotification(buttonElement) {
        const notification = buttonElement.closest('.result-box').querySelector('.copy-notification');
        if (!notification) return;
        notification.style.visibility = 'visible';
        notification.style.opacity = '1';
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => { notification.style.visibility = 'hidden'; }, 500);
        }, 2000);
    }
    

    const hashInput = document.getElementById('hashInput');
    const generateHashButton = document.getElementById('generateHashButton');
    const resultBoxHash = document.getElementById('resultBoxHash');
    const hashOutput = document.getElementById('hashOutput');
    const copyHashButton = document.getElementById('copyHashButton'); 

    async function generateSecureHash() {
        const password = hashInput.value;
        if (!password) { alert('Por favor, digite uma senha para gerar o hash.'); return; }
        try {
            const salt = window.crypto.getRandomValues(new Uint8Array(16));
            const key = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);
            const hashBuffer = await window.crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256); 
            const bufferToHex = buffer => Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
            hashOutput.textContent = `${bufferToHex(salt)}:${bufferToHex(hashBuffer)}`;
            resultBoxHash.style.display = 'block';
        } catch (error) { alert('Erro ao gerar o hash. Algoritmo pode não ser suportado (SHA-256 é necessário).'); }
    }
    generateHashButton.addEventListener('click', generateSecureHash);


    copyHashButton.addEventListener('click', () => {
        if(hashOutput.textContent) {
            navigator.clipboard.writeText(hashOutput.textContent); 
            showCopyNotification(copyHashButton);
        }
    });

    const transformInput = document.getElementById('transformInput');
    const transformButton = document.getElementById('transformButton');
    const transformOutput = document.getElementById('transformOutput');
    const copyTransformButton = document.getElementById('copyTransformButton');

    function transformPassword() {
        const input = transformInput.value;
        if (!input) { alert('Por favor, digite uma palavra base para transformar.'); return; }
        const leetMap = {
            'a': ['4', '@'], 'e': ['3', '€'], 'i': ['1', '!'], 'o': ['0', '()'], 
            's': ['5', '$'], 't': ['7', '+'], 'g': ['9', '6'], 'l': ['1', '|'], 'z': ['2']
        };
        let transformed = '';
        for (let char of input.toLowerCase()) {
            if (leetMap[char]) {
                transformed += leetMap[char][Math.floor(Math.random() * leetMap[char].length)];
            } else {
                transformed += char;
            }
        }
        const extraSymbols = "!@#$%&*?";
        transformed += extraSymbols[Math.floor(Math.random() * extraSymbols.length)];
        transformed = transformed.charAt(0).toUpperCase() + transformed.slice(1);
        transformOutput.textContent = transformed;
    }
    transformButton.addEventListener('click', transformPassword);
    copyTransformButton.addEventListener('click', () => { 
        if(transformOutput.textContent !== 'Sua senha transformada aparecerá aqui...') {
             navigator.clipboard.writeText(transformOutput.textContent); 
             showCopyNotification(copyTransformButton); 
        }
    });
    

    const randomPasswordOutput = document.getElementById('randomPasswordOutput');
    const copyRandomButton = document.getElementById('copyRandomButton');
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const uppercaseCheck = document.getElementById('uppercaseCheck');
    const numbersCheck = document.getElementById('numbersCheck');
    const symbolsCheck = document.getElementById('symbolsCheck');
    const generateRandomButton = document.getElementById('generateRandomButton');

    const charSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz', uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789', symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    function generateRandomPassword() {
        const length = parseInt(lengthSlider.value, 10);
        let characterPool = charSets.lowercase;
        if (uppercaseCheck.checked) characterPool += charSets.uppercase;
        if (numbersCheck.checked) characterPool += charSets.numbers;
        if (symbolsCheck.checked) characterPool += charSets.symbols;
        let password = '';
        const randomValues = new Uint32Array(length);
        window.crypto.getRandomValues(randomValues);
        for (let i = 0; i < length; i++) {
            password += characterPool[randomValues[i] % characterPool.length];
        }
        randomPasswordOutput.textContent = password;
    }
    lengthSlider.addEventListener('input', (e) => { lengthValue.textContent = e.target.value; });
    generateRandomButton.addEventListener('click', generateRandomPassword);
    copyRandomButton.addEventListener('click', () => { 
        if (randomPasswordOutput.textContent !== 'Sua senha aleatória aparecerá aqui...') {
            navigator.clipboard.writeText(randomPasswordOutput.textContent); 
            showCopyNotification(copyRandomButton); 
        }
    });
    
    generateRandomPassword();
});