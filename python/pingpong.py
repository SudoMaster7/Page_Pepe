import turtle

# Configuração da tela
wn = turtle.Screen()
wn.title("Pong")
wn.bgcolor("black")
wn.setup(width=600, height=400)

# Pontuação
score_a = 0
score_b = 0

# Raquete A
raquete_a = turtle.Turtle()
raquete_a.speed(0)
raquete_a.shape("square")
raquete_a.color("white")
raquete_a.shapesize(stretch_wid=5, stretch_len=1)
raquete_a.penup()
raquete_a.goto(-250, 0)

# Raquete B
raquete_b = turtle.Turtle()
raquete_b.speed(0)
raquete_b.shape("square")
raquete_b.color("white")
raquete_b.shapesize(stretch_wid=5, stretch_len=1)
raquete_b.penup()
raquete_b.goto(250, 0)

# Bola
bola = turtle.Turtle()
bola.speed(40)
bola.shape("circle")
bola.color("white")
bola.penup()
bola.goto(0, 0)
bola.dx = 2
bola.dy = -2

# Placar
placar = turtle.Turtle()
placar.speed(0)
placar.color("white")
placar.penup()
placar.hideturtle()
placar.goto(0, 170)
placar.write("Jogador A: 0  Jogador B: 0", align="center", font=("Courier", 24, "normal"))

# Funções
def raquete_a_cima():
    y = raquete_a.ycor()
    y += 20
    raquete_a.sety(y)

def raquete_a_baixo():
    y = raquete_a.ycor()
    y -= 20
    raquete_a.sety(y)

def raquete_b_cima():
    y = raquete_b.ycor()
    y += 20
    raquete_b.sety(y)

def raquete_b_baixo():
    y = raquete_b.ycor()
    y -= 20
    raquete_b.sety(y)

# Teclado
wn.listen()
wn.onkeypress(raquete_a_cima, "w")
wn.onkeypress(raquete_a_baixo, "s")
wn.onkeypress(raquete_b_cima, "Up")
wn.onkeypress(raquete_b_baixo, "Down")

# Loop principal do jogo
while True:
    wn.update()

    # Movimentação da bola
    bola.setx(bola.xcor() + bola.dx)
    bola.sety(bola.ycor() + bola.dy)

    # Verificação das bordas
    if bola.ycor() > 190:
        bola.sety(190)
        bola.dy *= -1

    if bola.ycor() < -190:
        bola.sety(-190)
        bola.dy *= -1

    if bola.xcor() > 290:
        bola.goto(0, 0)
        bola.dy *= -1
        score_a += 1
        placar.clear()
        placar.write("Jogador A: {}  Jogador B: {}".format(score_a, score_b), align="center", font=("Courier", 24, "normal"))

    if bola.xcor() < -290:
        bola.goto(0, 0)
        bola.dy *= -1
        score_b += 1
        placar.clear()
        placar.write("Jogador A: {}  Jogador B: {}".format(score_a, score_b), align="center", font=("Courier", 24, "normal"))

    # Verificação das colisões
    if (bola.xcor() > 240 and bola.xcor() < 250) and (bola.ycor() < raquete_b.ycor() + 50 and bola.ycor() > raquete_b.ycor() - 50):
        bola.setx(240)
        bola.dx *= -1
        bola.speed =+1

    if (bola.xcor() < -240 and bola.xcor() > -250) and (bola.ycor() < raquete_a.ycor() + 50 and bola.ycor() > raquete_a.ycor() - 50):
        bola.setx(-240)
        bola.dx *= -1
        bola.speed =+1