/**
 * 2019.09.20 - Marcos Cardoso
 * 
 * Persistence is a way to simplify the access to the game-services webservice 
 * witch allow us to retrieve information about the users/students 
 */

var LocalScoreManager = function()
{
    // shortcut to constructor
    // var student, scores, users, nearestScores, ids;
    var p = this;
    p.user;
    p.student;
    p.users;
    p.scores;
    p.keys;
    p.nearestUsers;
    p.nearestScores;
    p.nearestKeys;
    p.ids;
    
    // document.domain = "noas.com.br";
    
    // Retorna o usuário logado na página. Não faz distinção entre alunos e não alunos
    p.getLoggedUser = function()
    {
        parent.GameService.getLoggedUser(function(u)
        {
            p.user = u;
            p.getTopScores('pontos');
            p.getNearestScores('pontos');
        });
    }
    // Busca informações do estudante logado
    p.getLoggedStudent = function(id)
    { 
        parent.GameService.getStudent(id, function(s){
            p.student = s;
        })
    }
    // Retorna uma lista com as pontuações mais altar de acordo com o type que geralmente é 'pontos'
    p.getTopScores = function(type, student = false)
    {
        p.ids = [];
        parent.GameService.listTopScores(type, function(s){
            p.scores = s;
            p.getUsers(p.scores);
        });
    }
    // Retorna uma lista de alunos com score próximo do score do usuário
    p.getNearestScores = function(type)
    {
        p.nearestKeys = [];
        p.nearestScores = [];
        parent.GameService.listNearestScores(p.user.id, type, function(s){
            
            try {
                Object.entries(s).forEach(([key, value]) => {
                    p.nearestKeys.push(key);
                    p.nearestScores.push(value);
                });
                p.getUsers(p.nearestScores, false);
            }
            catch(e) 
            {
                console.log('error -> ', e);
            }
        }, 5);
    }
    p.getUsers = function(s, geral = true)
    {
        p.keys = [];
        var ids = p.getIds(s);

        var idsArray = ids.split(",")
        var newObj = [] 

        parent.GameService.listUsers(ids, function (us) {
            for (var i = 0; i < us.length; i++) {
                if (geral) p.keys.push(i + 1);
                const index = us.findIndex((user, index, array) => user.id.toString() === idsArray[i].toString());
                newObj.push(us[index])
            }
            if (geral)
                p.users = newObj.slice()
            else
                p.nearestUsers = newObj.slice()
        });
    }
    // Dispara o método getStudent a cada id da lista ids
    p.getStudents = function(s)
    {
        let ids = p.getIds(s);
        for (let i = 0; i < ids.length; i++)
            p.getStudent(ids[i]);
    }
    // Busca informações de estudante para um id específico
    p.getStudent = function(id)
    { 
        parent.GameService.getStudent(id, function(s){
            p.student = s;
        })
    }
    // Retorna uma lista com os ids de acordo com a lista de scores passada
    p.getIds = function(s)
    {
        let arr = [];
        for(let i = 0; i < s.length; i++) 
            arr[i] = s[i].user;
        return arr.toString();
    }
    // Salva o score do aluno logado
    p.saveScore = function(score, type)
    {
        parent.GameService.saveScore(type, p.user.id, score, function(sucess) {console.log(sucess);});
    }
}