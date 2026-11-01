Probability_matrix = {
    "tor" : 0.9,
    "vpn" : 0.2,
    "large_Accuracy_radius" : 0.3,
    "no CF_forward" : 0.7
    
}
#no reason for python probably best for js just so you dont have to worry about adapters
#why not

def probability_calc(params: list) -> float:
    probability = 0.0
    for param in params:
        if (param in Probability_matrix):
            probability_calc += probability_calc[param]
        else:
            print("parsing error on " + str(param))
    return probability



