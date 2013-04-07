/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/7/13
 * Time: 10:36 AM
 * To change this template use File | Settings | File Templates.
 */
describe("Photo", function() {
    var controller = null;
    var store = null;
    beforeEach(function() {
        if (!controller) {
            controller = Application.getController("ScreensController");
        }
        if (!store) {
            store = controller.getStore('PhotoStore');
        }
    });

    it("controller must be defined",function(){
        expect(controller).toBeDefined();
    });

    it("Store must be definded", function(){
        expect(store).toBeDefined();
    });

    it("Store should not auto load",function(){
        expect(store.autoLoad).toEqual(false);
    });

    it("Store should have load function",function(){
        expect(store.load).toBeDefined();
    });

    it("Store should have isLoading function",function(){
        expect(store.isLoading).toBeDefined();
        expect(store.isLoading()).toEqual(false);
    });

    it("sets up latency configuration and receives latency", function() {
        runs(function() {
            store.load({params: { text: 'red' }});
        }, "an asynchronous method");

        waitsFor(function() {
            return store.isLoading() == false;
        }, "store loading complete", 4000);
    });

    it("Store should have photos", function() {
        expect(store.getCount()).toBeGreaterThan(0);
    });
});