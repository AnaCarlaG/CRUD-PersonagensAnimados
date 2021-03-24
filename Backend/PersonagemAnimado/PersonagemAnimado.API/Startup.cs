using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PersonagemAnimado.Application.AutoMapper;
using AutoMapper;
using PersonagemAnimado.Infraestrutura.Data;
using PersonagemAnimado.Infraestrutura.Repository;
using PersonagemAnimado.Application.Repository;
using System.Reflection;
using System;
using System.IO;
using Microsoft.OpenApi.Models;
using PersonagemAnimado.Application.Services;
using PersonagemAnimado.Application.Interfaces;

namespace PersonagemAnimado.API
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<Context>(options => options.UseSqlServer(Configuration.GetConnectionString("PersonagemAnimado")));
            services.AddAutoMapper(typeof(DomainToViewModelMappingProfile));
            services.AddAutoMapper(typeof(ViewModelToDomainMappingProfile));
            services.AddScoped<IFilmeRepository, FilmeRepository>();
            services.AddScoped<IPersonagemRepository, PersonagemRepository>();
            services.AddScoped<IFilmeService, FilmeService>();
            services.AddScoped<IPersonagemService, PersonagemService>();

            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins, builder =>
                {
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                    builder.WithOrigins("http://localhost", "http://localhost:4200");
                });
            });

            services.AddControllers().ConfigureApiBehaviorOptions(options => { options.SuppressModelStateInvalidFilter = true; });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PersonagemAnimado.API", Version = "v1" });
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            #region Swagger
            app.UseSwagger();
            app.UseSwaggerUI(s =>
            {
                s.SwaggerEndpoint("/swagger/v1/swagger.json", "API Personagem de Animação");
            });
            #endregion
        }
    }
}
