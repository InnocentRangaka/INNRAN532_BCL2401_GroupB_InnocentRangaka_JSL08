// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;

// 2. `BankBranch` class for managing branch information.
class BankBranch {
    // 3. In the `BankBranch` class:
    //    - A constructor that takes `branchInfo` as a parameter.
    constructor(branchInfo) {
        //    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
        //    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
        if (!bankBranchInstance) {
            bankBranchInstance = this; // Assign the created instance to the singleton variable
            this.branchInfo = branchInfo;
        }

        //    - Return the `bankBranchInstance` whether it's newly created or existing.
        return bankBranchInstance;
    }
    
    // 4. A method to the `BankBranch` class for managing branch-related information.
    // `getBranchInfo` method to retrieve branch details.
    getBranchInfo() {
        return this.branchInfo;
    }

    // `getBranchInfo` method to retrieve branch name.
    getBranchName() {
        return this.branchInfo.name;
    }
    
    // `getBranchInfo` method to retrieve branch address.
    getBranchAddress() {
        return this.branchInfo.address;
    }

    // `getBranchInfo` method to set branch details.
    setBranchInfo(newInfo) {
        this.branchInfo = newInfo;
    }
}


// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
const branchA = new BankBranch({ name: "Rustenburg Branch", address: "123 Phokeng", telephone: "0123526552", manager: "Innocent Rangaka" });
const branchB = new BankBranch({ name: "Capetown Branch", address: "456 CPT", telephone: "0123526552", manager: "CodeSpace" });

//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
console.log(branchA.getBranchInfo()); // Output: { name: "Rustenburg Branch", address: "123 Phokeng" }
console.log(branchB.getBranchInfo()); // Output: { name: "Rustenburg Branch", address: "123 Phokeng" } (Same as branchA)

//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
console.log(branchA === branchB);   // Output: true (Both refer to the same instance)

// 6. Additional Usage
//    - Use the `getBranchName` method to retrieve branch name from the instances.
console.log(branchA.getBranchName()); // Output: { "Rustenburg Branch" }
console.log(branchB.getBranchName()); // Output: { "Rustenburg Branch" } (Same as branchA)

//    - Update branch information (modifies the single instance)
branchA.setBranchInfo({ name: "Johannesburg Branch", address: "456 JHB", telephone: "0123526552", manager: "Thabiso Rangaka" });
console.log(branchB.getBranchInfo()); // Outputs name: "Johannesburg Branch", address: "456 JNB", telephone: "0123526552", manager: "Thabiso Rangaka" (updated info)

//    - Use the `getBranchName` method to retrieve branch name from the instances.
console.log(`${branchA.getBranchName()} at ${branchA.getBranchAddress()}`); // Output: { "Johannesburg Branch" at "456 JHB" }
console.log(`${branchB.getBranchName()} at ${branchB.getBranchAddress()}`); // Output: { "Johannesburg Branch" at "456 JHB" } (Same as branchA)