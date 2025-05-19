import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UseInterceptors } from '@nestjs/common';

export function createUploadInterceptor(
  fieldName: string,
  destinationPath: string,
) {
  return UseInterceptors(
    FileInterceptor(fieldName, {
      storage: diskStorage({
        destination: destinationPath,
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  );
}
