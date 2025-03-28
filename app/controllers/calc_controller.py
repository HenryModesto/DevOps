def calculate_expression(expression):
    try:
        # Substitui o operador de porcentagem por uma operação real
        expression = expression.replace('%', '/100')
        
        # Calcula a expressão
        result = eval(expression)
        
        return round(result, 4)  # Arredonda pra 4 casas
    except ZeroDivisionError:
        return "Erro: divisão por zero"
    except:
        return "Expressão inválida"