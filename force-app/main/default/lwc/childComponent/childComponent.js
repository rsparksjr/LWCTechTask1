import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api inputitem;
    @api isSelected = false;

    // Fire event when user clicks on a button and include the value of the inputitem
    fireSelectEvent() {
        //this.isSelected = !this.isSelected;
        this.isSelected = true;
        console.log('isSelected', this.isSelected);
        const event = new CustomEvent('inputitemselect', {
            detail: this.inputitem
        });
        this.dispatchEvent(event);
    }
}