################o que vamos comer hoje?#################
import random
from time import sleep
from external_modules import title


title('Dúvidas do que comer? Pergunte pra mim!')

#pergunta ao usuário o que ele quer comer
first_option = input('Qual a primeira opção?\n: ')
op2 = input('E a segunda opção?\n: ')
op3 = input('A terceira opção?\n: ')
op4 = input('Agora a quarta opção\n: ')

#transforma as opções em uma lista e coloca elas no aleatório
lista_completa = [op1, op2, op3, op4]
gera = random.choice(lista_completa)
print('='*45)
#brinca com o usuário:
sleep(2)
print('Certo, agora vou pensar um pouquinho aqui...')
sleep(2)
print('Hummm....')
sleep(5)
print(f'Acho que voce deveria comer {gera}')
sleep(3)
print(f'É, realmente, melhor comer {gera} mesmo')
print('Bom apetite!')


