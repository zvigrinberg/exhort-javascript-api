/**
 * Exhort API
 * Vulnerability analysis with Red Hat Trusted Profile Analyzer
 *
 * OpenAPI spec version: 4.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ProviderStatus } from '../backend/ProviderStatus';
import { Source } from '../backend/Source';
export declare class ProviderReport {
    'status'?: ProviderStatus;
    'sources'?: {
        [key: string]: Source;
    };
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}