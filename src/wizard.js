import _ from "lodash";

const obj = {
    one : {
        two: {
            three: {
                four: {
                    test:'four'
                }
            }
        }
    }
}

const getTest = _.get(obj,"one.three.four",{})

console.log("test"  + getTest);

export const wizard = 'Merlin'