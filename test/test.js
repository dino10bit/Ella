var assert = require('chai').assert;


var java;

try {
    console.log('trying [release]')
        //RELEASE
    java = require('../build/Release/ella.node'); //debug mode.
} catch (e) {
    console.log('fail: trying [debug]')
        //DEBUG
    java = require('../build/Debug/ella.node'); //debug mode.
}

describe('ella', function() {

    it('creating object and checking members', function() {
        assert.isObject(java, '');

        assert.isFunction(java.getClassPath, 'getClassPath function');
        assert.isFunction(java.start, 'start function');
        assert.isFunction(java.setClassPath, 'setClassPath function');
    });


    it('java#setClassPath', function() {

        /* setClassPath:
         *   array: array of paths with jars files.
         *   recursive: true/false; search for .jars and .class recursively.
         *
         * */

        java.setClassPath(['/Users/cvaldez/Desktop/NWR/java/lib/itext-5.5.8/',
            '/Users/cvaldez/Desktop/NWR/java/lib/pdfbox/',
            '/Users/cvaldez/Desktop/NWR/java/PDFHtml/bin/'
        ], true);

        assert.isNotNull(java.getClassPath(), 'should show the classpath.');
        // console.log(java.getClassPath());

    });

    var vm;

    it('loading vm', function(done) {
        this.timeout(14000);
        java.start(function(_vm) {
            assert.isObject(_vm, 'vm should be a object');
            vm = _vm;
            //   runTestClass(_vm);
            done();
        });

    });

    var strBuffer;
    it('loading class', function() {

        assert.isObject(vm, 'vm should be a object');
        strBuffer = vm.New('java/lang/StringBuffer');
        assert.isObject(strBuffer, 'loading  java->StringBuffer');
        //console.log(Object.keys(strBuffer));
    });

    it('calling a method with string arg:  [java] StringBuffer -> append', function() {

        assert.isObject(strBuffer, 'loading  java->StringBuffer');
        assert.isFunction(strBuffer.append, 'StringBuffer.append');
        assert.isFunction(strBuffer.toString, 'StringBuffer.toString');


        console.log(strBuffer.append('Hello World'));
        //console.log('o -> ', strBuffer.toString());
    });


    /*




            var strBuffer;
        it('loading class', function() {
        
            assert.isObject(vm, 'vm should be a object');
            console.log('vm->', vm);
            strBuffer = vm.New('java/lang/StringBuffer');


            assert.isObject(strBuffer, 'loading  java->StringBuffer');
        });

        it('calling a method with string arg:  [java] StringBuffer -> append', function() {
        
            assert.isFunction(strBuffer.append, 'StringBuffer.append');
            assert.isFunction(strBuffer.toString, 'StringBuffer.toString');

            strBuffer.append('Hello World');

            console.log('o -> ', strBuffer.toString());
        });
    */
})
