import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    student: {
        firstname: string
        lastname: string
        age: number
    }
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    FullName: string
    StudentAge: number
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        StudentAge: input.student.age,
        FullName: input.student.firstname + input.student.lastname
    }
}

ut.student.age
    }
}

