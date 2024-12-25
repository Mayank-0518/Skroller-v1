import conf from "../conf/conf";
import { Client,Account,ID } from "appwrite";


export class AuthService{
    client= new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email , password , name}){
        try {
            //creating new user account function
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
            //if user now exists login the user   
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    
    //login function 
    async login({email , password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }
   

    //current user status function
    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            throw error;
        }
        return null;
    }

    //function to log out
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}

//creating a new object of AuthService class (all functions are accessible through this object)
const authService = new AuthService();


//exporting the object on which functions are applied
export default authService