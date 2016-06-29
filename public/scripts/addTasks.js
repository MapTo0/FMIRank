(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC2WuVrxbMMEPvBt89XSKPINae4XpJpTPQ",
        authDomain: "fmirank.firebaseapp.com",
        databaseURL: "https://fmirank.firebaseio.com",
        storageBucket: "fmirank.appspot.com",
    };
    firebase.initializeApp(config);

    var addTaskBtn = document.getElementById("add-task-btn"),
        tasktitle = document.getElementById("task-title"),
        taskDescription = document.getElementById("task-description"),
        taskInputFormat = document.getElementById("task-input-format"),
        taskFormatNote = document.getElementById("task-format-note"),
        taskOutputFormat = document.getElementById("task-output-format"),
        taskConstraints = document.getElementById("task-constraints"),
        taskConstraintsNote = document.getElementById("task-constraints-note"),
        taskSampleInput = document.getElementById("task-sample-input"),
        taskSampleOutput = document.getElementById("task-sample-output"),
        taskExplanation = document.getElementById("task-explanation");

    function saveNewTask(task) {
        // Generate unique key for every task
        var newTaskId = firebase.database().ref().child('tasks').push().key;
        var updates = {};
        updates['/tasks/' + newTaskId] = task;

        return firebase.database().ref().update(updates);
    };

    addTaskBtn.addEventListener("click", function(event) {
        var taskData = {
            title: tasktitle.value,
            description: taskDescription.value,
            inputFormat: taskInputFormat.value,
            inputFormatNote: taskFormatNote,
            outputFormat: taskOutputFormat.value,
            constraints: taskConstraints.value,
            constraintsNote: taskConstraintsNote.value,
            sampleInput: taskSampleInput.value,
            sampleOutput: taskSampleOutput.value,
            explanation: taskExplanation.value,
            // tests: tests
        };
        saveNewTask(taskData)
    });
})();
