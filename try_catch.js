try{
    try{
        throw new Error("oops");
    }
    catch (ex){
        console.error("inner", ex.message);
        throw ex; // 会先走 finally 然后再走外层 catch
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer, ex.message");
}
// output:
// inner oops
// finally
// outer, ex.message