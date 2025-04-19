export default {
    permissions: [1, 2, 3, 4, 5, 6],

    MongoIDPattern: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,

    ROLES: Object.freeze({
        USER: "USER",
        ADMIN: "ADMIN",
        WRITER: "WRITER",
        TEACHER: "TEACHER",
        SUPPLIER: "SUPPLIER",
    }),

    PERMISSIONS: Object.freeze({
        USER: [1, 2, 3],
        ADMIN: [1, 2, 3, 4, 5, 6,],
    }),
} 
