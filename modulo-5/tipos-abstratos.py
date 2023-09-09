class NumeroComplexo:
    def __init__(self, real, imaginario):
        self.real = real
        self.imaginario = imaginario

    def __str__(self):
        return f"{self.real} + {self.imaginario}i"

    def somar(self, outro):
        parte_real = self.real + outro.real
        parte_imaginaria = self.imaginario + outro.imaginario
        return NumeroComplexo(parte_real, parte_imaginaria)

    def subtrair(self, outro):
        parte_real = self.real - outro.real
        parte_imaginaria = self.imaginario - outro.imaginario
        return NumeroComplexo(parte_real, parte_imaginaria)

    def multiplicar(self, outro):
        parte_real = self.real * outro.real - self.imaginario * outro.imaginario
        parte_imaginaria = self.real * outro.imaginario + self.imaginario * outro.real
        return NumeroComplexo(parte_real, parte_imaginaria)

    def dividir(self, outro):
        denominador = outro.real ** 2 + outro.imaginario ** 2
        parte_real = (self.real * outro.real + self.imaginario * outro.imaginario) / denominador
        parte_imaginaria = (self.imaginario * outro.real - self.real * outro.imaginario) / denominador
        return NumeroComplexo(parte_real, parte_imaginaria)

    def obter_real(self):
        return self.real

    def obter_imaginario(self):
        return self.imaginario


num1 = NumeroComplexo(3, 2)
num2 = NumeroComplexo(1, 7)

print(f"Número 1: {num1}")
print(f"Número 2: {num2}")


resultado_somar = num1.somar(num2)
resultado_subtrair = num1.subtrair(num2)
resultado_multiplicar = num1.multiplicar(num2)
resultado_dividir = num1.dividir(num2)

print(f"Soma: {resultado_somar}")
print(f"Subtração: {resultado_subtrair}")
print(f"Multiplicação: {resultado_multiplicar}")
print(f"Divisão: {resultado_dividir}")

print(f"Parte Real de Número 1: {num1.obter_real()}")
print(f"Parte Imaginária de Número 1: {num1.obter_imaginario()}")
