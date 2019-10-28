################o que vamos comer hoje?#################
import random
import time
print('='*45)
print('Dúvidas do que comer? Pergunte pra mim!')
print('='*45)

#pergunta ao usuário o que ele quer comer
op1 = input('Qual a primeira opção?\n: ')
op2 = input('E a segunda opção?\n: ')
op3 = input('A terceira opção?\n: ')
op4 = input('Agora a quarta opção\n: ')

#transforma as opções em uma lista e coloca elas no aleatório
lista_completa = [op1, op2, op3, op4]
gera = random.choice(lista_completa)
print('='*45)
#brinca com o usuário:
time.sleep(2)
print('Certo, agora vou pensar um pouquinho aqui...')
time.sleep(2)
print('Hummm....')
time.sleep(5)
print('Acho que voce deveria comer {}'.format(gera))
time.sleep(3)
print('É, realmente, melhor comer {} mesmo'.format(gera))
print('Bom apetite!')


