export var PostActionTypes;
(function (PostActionTypes) {
    PostActionTypes["GETALLPOSTS"] = "[POST GETALL] All Posts getAll";
    PostActionTypes["LOADALLPOSTS"] = "[POST LOADED] All Posts Loaded";
    PostActionTypes["ADDPOST"] = "[POST ADD] Add Post";
    PostActionTypes["UPDATEPOST"] = "[POST UPDATE] Update Post";
    PostActionTypes["REMOVEPOST"] = "[POST REMOVE] Remove Post";
})(PostActionTypes || (PostActionTypes = {}));
export class GETALLPOSTS {
    constructor() {
        this.type = PostActionTypes.GETALLPOSTS;
    }
}
export class LOADALLPOSTS {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LOADALLPOSTS;
        console.log(payload.posts);
    }
}
export class ADDPOST {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.ADDPOST;
    }
}
export class UPDATEPOST {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.UPDATEPOST;
    }
}
export class REMOVEPOST {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.REMOVEPOST;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF9hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kY3NrL3N0b3JlL3NyYy9saWIvYWN0aW9ucy9wb3N0X2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQU4sSUFBWSxlQU1YO0FBTkQsV0FBWSxlQUFlO0lBQ3ZCLGlFQUE4QyxDQUFBO0lBQzlDLGtFQUErQyxDQUFBO0lBQy9DLGtEQUErQixDQUFBO0lBQy9CLDJEQUF3QyxDQUFBO0lBQ3hDLDJEQUF3QyxDQUFBO0FBQzVDLENBQUMsRUFOVyxlQUFlLEtBQWYsZUFBZSxRQU0xQjtBQUdELE1BQU0sT0FBTyxXQUFXO0lBQXhCO1FBQ2EsU0FBSSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUM7SUFDaEQsQ0FBQztDQUFBO0FBR0QsTUFBTSxPQUFPLFlBQVk7SUFFckIsWUFBbUIsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEcEMsU0FBSSxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUFFLENBQUM7Q0FDakY7QUFFRCxNQUFNLE9BQU8sT0FBTztJQUVoQixZQUFvQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQURuQyxTQUFJLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUNPLENBQUM7Q0FDbkQ7QUFHRCxNQUFNLE9BQU8sVUFBVTtJQUVuQixZQUFtQixPQUFnRDtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUF5QztRQUQxRCxTQUFJLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUMyQixDQUFDO0NBQzFFO0FBR0QsTUFBTSxPQUFPLFVBQVU7SUFFbkIsWUFBcUIsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFEMUMsU0FBSSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDVSxDQUFDO0NBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgSVBvc3QgfSBmcm9tICcuLi9tb2RlbHMvcG9zdC5tb2RlbCc7IFxyXG5cclxuZXhwb3J0IGVudW0gUG9zdEFjdGlvblR5cGVzIHtcclxuICAgIEdFVEFMTFBPU1RTID0gJ1tQT1NUIEdFVEFMTF0gQWxsIFBvc3RzIGdldEFsbCcsXHJcbiAgICBMT0FEQUxMUE9TVFMgPSAnW1BPU1QgTE9BREVEXSBBbGwgUG9zdHMgTG9hZGVkJyxcclxuICAgIEFERFBPU1QgPSAnW1BPU1QgQUREXSBBZGQgUG9zdCcsXHJcbiAgICBVUERBVEVQT1NUID0gJ1tQT1NUIFVQREFURV0gVXBkYXRlIFBvc3QnLFxyXG4gICAgUkVNT1ZFUE9TVCA9ICdbUE9TVCBSRU1PVkVdIFJlbW92ZSBQb3N0J1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdFVEFMTFBPU1RTIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBQb3N0QWN0aW9uVHlwZXMuR0VUQUxMUE9TVFM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTE9BREFMTFBPU1RTIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBQb3N0QWN0aW9uVHlwZXMuTE9BREFMTFBPU1RTO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgcG9zdHM6IElQb3N0W119KSB7IGNvbnNvbGUubG9nKHBheWxvYWQucG9zdHMpICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBRERQT1NUIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBQb3N0QWN0aW9uVHlwZXMuQUREUE9TVDtcclxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgcGF5bG9hZDogeyBwb3N0OiBJUG9zdCB9KSB7fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVQREFURVBPU1QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFBvc3RBY3Rpb25UeXBlcy5VUERBVEVQT1NUO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgaWQ6IG51bWJlcjsgY2hhbmdlczogUGFydGlhbDxJUG9zdD4gfSkge31cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSRU1PVkVQT1NUIGltcGxlbWVudHMgQWN0aW9ue1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFBvc3RBY3Rpb25UeXBlcy5SRU1PVkVQT1NUO1xyXG4gICAgY29uc3RydWN0b3IgKCBwdWJsaWMgcGF5bG9hZDoge2lkOiBudW1iZXIgfCBudW1iZXJ9KXt9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUG9zdEFjdGlvbiA9ICBHRVRBTExQT1NUUyB8IExPQURBTExQT1NUUyB8IEFERFBPU1QgfCBVUERBVEVQT1NUIHwgUkVNT1ZFUE9TVDtcclxuIl19