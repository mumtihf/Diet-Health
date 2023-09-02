import DataPage from '../pageobjects/data.page.js'

describe("Open Application", () => {
    it("Create User", async () => {
        await DataPage.createFirstInformation('Mumti','45','158')
        await DataPage.createSecondInformation()
        await expect()
        await $('com.fghilmany.dietmealapp:id/et_name').setValue('mumti')
    })
})