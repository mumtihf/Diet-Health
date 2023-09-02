class DataPage {
    get inputName () { 
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get inputWeight () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get inputHeight () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get inputGender () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[2]')
    }

    get btnNext1 () {
        return $('android.widget.Button')
    }

    get inputActivity () {
        return $('android.widget.RadioButton')
    }

    get btnNext2 () {
        return $('android.widget.Button')
    }

    async createFirstInformation(name, weight, height, gender){
        await this.inputName.setValue(name)
        await this.inputWeight.setValue(weight)
        await this.inputHeight.setValue(height)
        await this.inputGender.click()
        await this.btnNext1.click()
    }

    async createSecondInformation(activity){
        await this.inputActivity.click()
        await this.btnNext2.click()
    }
}

export default new DataPage()