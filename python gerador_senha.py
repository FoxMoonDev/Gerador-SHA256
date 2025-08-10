import hashlib
import os

ITERATIONS = 260000
SALT_SIZE = 16  
HASH_ALGORITHM = 'sha256'

def gerar_hash_seguro(senha: str) -> str:
    """
    Gera um hash seguro para uma nova senha usando PBKDF2, salt e iterações.
    
    Args:
        senha: A senha em texto puro a ser 'hasheada'.

    Returns:
        Uma string contendo o salt e o hash, prontos para serem armazenados.
    """
   
    salt = os.urandom(SALT_SIZE)
    

    hash_bytes = hashlib.pbkdf2_hmac(HASH_ALGORITHM, senha.encode('utf-8'), salt, ITERATIONS)
    

    return f"{salt.hex()}:{hash_bytes.hex()}"

def verificar_senha(senha_armazenada: str, senha_fornecida: str) -> bool:
    """
    Verifica se uma senha fornecida corresponde ao hash armazenado.

    Args:
        senha_armazenada: O valor completo (salt:hash) do banco de dados.
        senha_fornecida: A senha em texto puro que o usuário está tentando usar.

    Returns:
        True se a senha for válida, False caso contrário.
    """
    try:

        salt_hex, hash_armazenado_hex = senha_armazenada.split(':')
        salt = bytes.fromhex(salt_hex)
        hash_armazenado = bytes.fromhex(hash_armazenado_hex)
    except ValueError:

        return False
        

    novo_hash = hashlib.pbkdf2_hmac(HASH_ALGORITHM, senha_fornecida.encode('utf-8'), salt, ITERATIONS)
    

    return hashlib.compare_digest(hash_armazenado, novo_hash)


if __name__ == "__main__":
    print("--- Gerador e Verificador de Senhas Seguras ---")
    

    senha_do_usuario = "minhaSenhaSuperForte!@#2025"
    hash_para_armazenar = gerar_hash_seguro(senha_do_usuario)
    
    print(f"\nSenha original: {senha_do_usuario}")
    print(f"Hash gerado para armazenamento (salt + hash):\n{hash_para_armazenar}")
    

    print(f"Comprimento do hash armazenado: {len(hash_para_armazenar)} caracteres")

    print("\n--- Verificação ---")
    

    senha_tentativa_correta = "minhaSenhaSuperForte!@#2025"
    if verificar_senha(hash_para_armazenar, senha_tentativa_correta):
        print(f"'{senha_tentativa_correta}' -> VERIFICAÇÃO BEM-SUCEDIDA (Senha Correta)")
    else:
        print(f"'{senha_tentativa_correta}' -> FALHA NA VERIFICAÇÃO (Senha Incorreta)")
        

    senha_tentativa_errada = "senhaErrada"
    if verificar_senha(hash_para_armazenar, senha_tentativa_errada):
        print(f"'{senha_tentativa_errada}' -> VERIFICAÇÃO BEM-SUCEDIDA (Senha Correta)")
    else:
        print(f"'{senha_tentativa_errada}' -> FALHA NA VERIFICAÇÃO (Senha Incorreta)")