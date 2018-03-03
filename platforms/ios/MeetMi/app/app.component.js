"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // Your TypeScript logic goes here
    AppComponent.prototype.forCasual = function () {
        dialogs.confirm({
            title: "This is the Casuals' Room",
            message: "Are you looking for a fling?",
            neutralButtonText: "Not sure",
            cancelButtonText: "No",
            okButtonText: "Yes"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
    };
    AppComponent.prototype.forExclusive = function () {
        dialogs.confirm({
            title: "This is the Exclusives' Room",
            message: "Do you want a serious,long-term relationship?",
            neutralButtonText: "Not sure",
            cancelButtonText: "No",
            okButtonText: "Yes"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
    };
    AppComponent.prototype.forMarriage = function () {
        dialogs.confirm({
            title: "This is the Marriages' Room",
            message: "Is it your goal to get a spouse quickly?",
            neutralButtonText: "Not sure",
            cancelButtonText: "No",
            okButtonText: "Yes"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: './app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}()); // end of class
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0NBQXNDO0FBTXRDO0lBQUE7SUEwQ0EsQ0FBQztJQXpDQyxrQ0FBa0M7SUFFbEMsZ0NBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEIsS0FBSyxFQUFFLDJCQUEyQjtZQUNsQyxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNaLDZCQUE2QjtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEtBQUssRUFBRSw4QkFBOEI7WUFDckMsT0FBTyxFQUFFLCtDQUErQztZQUN4RCxpQkFBaUIsRUFBRSxVQUFVO1lBQzdCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWiw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNoQixLQUFLLEVBQUUsNkJBQTZCO1lBQ3BDLE9BQU8sRUFBRSwwQ0FBMEM7WUFDbkQsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFlBQVksRUFBRSxLQUFLO1NBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1osNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeENVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQztPQUNXLFlBQVksQ0EwQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTFDRCxJQTBDQyxDQUFBLGVBQWU7QUExQ0gsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBmb3JDYXN1YWwoKSB7XG4gICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICB0aXRsZTogXCJUaGlzIGlzIHRoZSBDYXN1YWxzJyBSb29tXCIsXG4gICAgbWVzc2FnZTogXCJBcmUgeW91IGxvb2tpbmcgZm9yIGEgZmxpbmc/XCIsXG4gICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiTm90IHN1cmVcIixcbiAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgb2tCdXR0b25UZXh0OiBcIlllc1wiXG4gIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgICAgfSk7XG4gIH1cblxuICBmb3JFeGNsdXNpdmUoKSB7XG4gICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICB0aXRsZTogXCJUaGlzIGlzIHRoZSBFeGNsdXNpdmVzJyBSb29tXCIsXG4gICAgbWVzc2FnZTogXCJEbyB5b3Ugd2FudCBhIHNlcmlvdXMsbG9uZy10ZXJtIHJlbGF0aW9uc2hpcD9cIixcbiAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOb3Qgc3VyZVwiLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcbiAgICBva0J1dHRvblRleHQ6IFwiWWVzXCJcbiAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXG4gICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZvck1hcnJpYWdlKCkge1xuICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgdGl0bGU6IFwiVGhpcyBpcyB0aGUgTWFycmlhZ2VzJyBSb29tXCIsXG4gICAgbWVzc2FnZTogXCJJcyBpdCB5b3VyIGdvYWwgdG8gZ2V0IGEgc3BvdXNlIHF1aWNrbHk/XCIsXG4gICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiTm90IHN1cmVcIixcbiAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgb2tCdXR0b25UZXh0OiBcIlllc1wiXG4gIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgICAgfSk7XG4gIH1cblxufS8vIGVuZCBvZiBjbGFzc1xuIl19