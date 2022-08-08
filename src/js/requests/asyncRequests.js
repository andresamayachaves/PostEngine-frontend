var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function addNewPostToBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/post/create/post');
        const posts = yield response.json();
        return posts;
    });
}
export function getAllPostsFromBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/post/get/all/posts');
        const posts = yield response.json();
        return posts;
    });
}
export function editPostToBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/post/get/all/posts');
        const posts = yield response.json();
        return posts;
    });
}
export function deletePostToBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/post/get/all/posts');
        const posts = yield response.json();
        return posts;
    });
}
//--- Comments
export function addNewCommentToBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/comment/create/comment');
        const posts = yield response.json();
        return posts;
    });
}
export function getAllCommentsFromBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/comment/get/all/comments');
        const comments = yield response.json();
        return comments;
    });
}
export function editCommentToBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/comment/update/comment');
        const comments = yield response.json();
        return comments;
    });
}
export function deleteCommentToBacked() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/comment/delete/comment');
        const posts = yield response.json();
        return posts;
    });
}
