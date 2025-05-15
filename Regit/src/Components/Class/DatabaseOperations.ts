
export default class DatabaseOperations { 
    private static instance : DatabaseOperations | null = null;
    private constructor(){}

    public static getInstance(){
        if(DatabaseOperations.instance == null){
            DatabaseOperations.instance = new DatabaseOperations();
        }
       return DatabaseOperations.instance;
    }
}
