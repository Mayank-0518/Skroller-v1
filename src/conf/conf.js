const conf = {
appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
appwriteProjectId: String(import.meta.env.VITE_APPWRITE_POJECT_ID),
appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
rtekey:String(import.meta.env.VITE_RTE_KEY),
}

export default conf