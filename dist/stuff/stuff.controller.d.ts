import { StuffService } from "./stuff.service";
export declare class StuffController {
    private stuffService;
    constructor(stuffService: StuffService);
    uploadStuff(file: any, type: string): Promise<{
        name: string;
        type: string;
    } & import("./staff.entity").Stuff>;
}
