import React from "react";
import Paginator from "./Paginator";
import {create} from "react-test-renderer"
describe("paginator component test", ()=>{
    test("pages count in 11 but should be showed only 10", ()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let spanc = root.findAllByType("span");
        expect(spanc.length).toBe(10);
    });
    test("if pages count is more then 10 button next", ()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});
