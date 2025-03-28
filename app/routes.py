from flask import Blueprint, render_template, request
from app.controllers import calc_controller

main = Blueprint('main', __name__)

@main.route('/', methods=['GET', 'POST'])
def calculator():
    result = None
    if request.method == 'POST':
        expression = request.form.get('expression')
        result = calc_controller.calculate_expression(expression)
    return render_template('calc_view.html', result=result)