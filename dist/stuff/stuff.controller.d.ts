import { StuffService } from "./stuff.service";
export declare class StuffController {
    private stuffService;
    constructor(stuffService: StuffService);
    uploadStuff(file: any): Promise<{
        name: string;
    } & import("./staff.entity").Stuff>;
}
