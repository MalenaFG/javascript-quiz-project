class Quiz {

    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion() {
        return this.currentQuestionIndex++
    }

    shuffleQuestions() {
        return this.questions.sort(() => Math.random() - 0.5)
    }

    checkAnswer(answer) {

        const currentQuestion = this.getQuestion()
        const correctAnswer = currentQuestion.answer

        if (answer === correctAnswer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true
        }
    }
}


