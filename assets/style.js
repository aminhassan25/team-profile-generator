nextEmployee() {
    this.promptRole().then((role) => {
        if (role === "Exit") {
            this.renderHTML();
            this.end();
        } else {
            this.promptInfo(role).then((data) => {
                switch (role) {
                    case "Manager":
                        var employee = new Manager(data.name, data.id, data.email, data.officeN);
                        break;
                    case "Engineer":
                        var employee = new Engineer(data.name, data.id, data.email, data.github);
                        break;
                    case "Intern":
                        var employee = new Intern(data.name, data.id, data.email, data.school);
                        break;
                }
                this.employees.push(employee);
                this.nextEmployee();
            });
        }
    });
}

promptInfo(role); {
    switch (role) {
        case "Manager":
            return inquirer.prompt(this.managerPrompt).then(function(data) {
                return data;
            });
            break;
        case "Engineer":
            return inquirer.prompt(this.engineerPrompt).then(function(data) {
                return data;
            });
            break;
        case "Intern":
            return inquirer.prompt(this.internPrompt).then(function(data) {
                return data;
            });
            break;
    }
}