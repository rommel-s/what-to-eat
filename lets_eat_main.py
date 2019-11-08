################o que vamos comer hoje?#################

import random
from time import sleep
import external_modules

external_modules.title('Dúvidas do que comer? Pergunte pra mim!')

#pergunta ao usuário o que ele quer comer
first_option = input('Qual a primeira opção?\n: ')
second_option = input('E a segunda opção?\n: ')
third_option = input('A terceira opção?\n: ')
fourth_option = input('Agora a quarta opção\n: ')

#transforma as opções em uma lista e coloca elas no aleatório
lista_completa = [
                    first_option,
                    second_option,
                    third_option, 
                    fourth_option
                ]

generate = random.choice(lista_completa)
external_modules.line(30)
#brinca com o usuário:
sleep(2)
print('Certo, agora vou pensar um pouquinho aqui...')
sleep(2)
print('Hummm....')
sleep(5)
print(f'Acho que voce deveria comer {generate}')
sleep(3)
print(f'É, realmente, melhor comer {generate} mesmo')
print('Bom apetite!')


