$(document).ready(function () {

    const getInput = function() {
        const arr = [];
        var str = $(".question").each(function() {
            arr.push(+$(this).val());
        })
        return arr;
    };

    const render = function(result) {
        $(".container").empty();
        $(".container").html(`Name: ${result.name}<br/>Photo Link: ${result.photo}<br/>`);
    };

    const process = function() {
        const userName = $("#name").val();
        const userPhoto = $("#pic").val();
        const userData = getInput();
        const userJSON = {
            name: userName,
            photo: userPhoto,
            scores: userData
        };
        $.get("/api/people", function(res){
            let best;
            let bestScore = 100;
            res.forEach(function(e) {
                let current = 0;
                for (let i = 0; i < e.scores.length; i++) {
                    current += Math.abs(userData[i] - e.scores[i]);
                }
                if (current < bestScore) {
                    best = e;
                    bestScore = current;
                }
            });
            render(best);
            $.post("/api/people", userJSON);
        });
    };

    $("#submit").click(process);
});