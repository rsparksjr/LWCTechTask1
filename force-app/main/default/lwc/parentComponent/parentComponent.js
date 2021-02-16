import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    selected = false;
    input;
    @track list = [];

    // Reset the selected var to remove the text being displayed
    // capture the data entered by the user
    // Verify the user entered something. If not, display an alert. Otherwise add the item to list array
    addInputToList() {
        this.selected = false;
        //const inputBox = this.template.querySelector("lightning-input");
        const inputBox = this.template.querySelector("[data-field='userinput']");
        this.input = inputBox.value;
        if(this.input == '') {
            alert('Please enter some text');
        } else {
            // using the list in a for:each. 
            // create an obj to hold a key value (array length) and the value inputted by the user
            // add the obj to the list array 
            const listItem = {
                listId: this.list.length,
                listName: this.input
            }
            this.list.push(listItem);
            inputBox.value = '';
        }
    }

    // handling the event inputitemselect. 
    // Capture the button data and set selected to true to display the value
    handleSelect(evt) {
        this.input = evt.detail;
        this.selected = true;
        // this.template.querySelectorAll('c-child-component').forEach(element => {
        //     if(element.inputitem === this.input) {
        //         this.selected = element.isSelected;
        //     }
        // });
        // console.log('selected', this.selected);
    }

}