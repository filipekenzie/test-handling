import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from './index'

describe("When everything is ok" , () => {
    test("Should name appear on the list when the user types a value on input and click on the button", async () => {
        render(<List />);
        userEvent.type( screen.getByRole('textbox'), "Filipe");
        userEvent.click(screen.getByRole("button"));

        userEvent.type( screen.getByRole('textbox'), "Ana");
        userEvent.click(screen.getByRole("button"));

        userEvent.type( screen.getByRole('textbox'), "Pedro");
        userEvent.click(screen.getByRole("button"));

        const myList = await screen.findAllByRole("listitem");

        expect(myList).toHaveLength(3)

        //screen.debug();
        //screen.logTestingPlaygroundURL(); 

    })

    it("Should not let the user be able to click on the button when the input value is empty", ()=> {
        render(<List/>)
        expect(screen.getByRole("button")).toBeDisabled();
    })

    test("Should the be available nthen the input is typed" , () => {
        render(<List/>)
        userEvent.type(screen.getByRole("textbox"), "Foo")
        expect(screen.getByRole("button")).not.toBeDisabled();
    })

})

describe("When everything not is ok", () => {
     test("Should the be available nthen the input is typed" , () => {
        render(<List/>)
        userEvent.type(screen.getByRole("textbox"), "Foo")
        expect(screen.getByRole("button")).not.toBeDisabled();
    })
})
