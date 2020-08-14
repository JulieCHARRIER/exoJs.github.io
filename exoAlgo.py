user_answer = input("Quelle couleur vous correspond le mieux ?:")
answers = ["bleu", "rouge", "jaune", "vert"]
messages = ["Vous êtes un Serdaigle", "Vous êtes un Gryffondor", "Vous êtes un Poufsouffle", "Vous êtes un Serpentard"]
for i in range(len(answers)):
    if answers[i] == user_answer :
        print(messages[i])
        break
else : 
    print("Vous êtes un moldu")